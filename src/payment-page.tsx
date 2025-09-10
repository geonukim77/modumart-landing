import React, { useState, useEffect, useRef } from 'react';
import { TossPaymentsSDK } from '@tosspayments/tosspayments-sdk';

// 상품 정보 타입
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  weight: string;
  origin: string;
}

interface PaymentPageProps {
  product: Product;
  onClose: () => void;
}

export default function PaymentPage({ product, onClose }: PaymentPageProps) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    addressDetail: ''
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [tossPayments, setTossPayments] = useState<any>(null);
  const [widgets, setWidgets] = useState<any>(null);
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  
  const paymentMethodRef = useRef<HTMLDivElement>(null);
  const agreementRef = useRef<HTMLDivElement>(null);

  // 토스페이먼츠 클라이언트 키 (테스트용)
  const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';

  useEffect(() => {
    const loadTossPayments = async () => {
      try {
        console.log('토스페이먼츠 SDK 로딩 시작');
        // 스크립트 태그로 토스페이먼츠 SDK 로드
        const script = document.createElement('script');
        script.src = 'https://js.tosspayments.com/v2/standard';
        script.async = true;
        script.onload = async () => {
          console.log('토스페이먼츠 SDK 로드 완료');
          try {
            // @ts-ignore
            if (!window.TossPayments) {
              throw new Error('TossPayments가 로드되지 않았습니다');
            }
            
            // @ts-ignore
            const tossPayments = window.TossPayments(clientKey);
            console.log('토스페이먼츠 객체 생성 완료');
            setTossPayments(tossPayments);
            
            // 고유한 customerKey 생성 (실제 서비스에서는 회원 ID 사용)
            const customerKey = `customer_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            console.log('생성된 customerKey:', customerKey);
            
            const paymentWidgets = tossPayments.widgets({ customerKey });
            console.log('결제위젯 객체 생성 완료');
            setWidgets(paymentWidgets);
            
            // 결제 금액 설정
            const amount = product.price + 3000;
            console.log('설정할 결제 금액:', amount);
            
            await paymentWidgets.setAmount({
              currency: 'KRW',
              value: amount,
            });
            console.log('결제 금액 설정 완료');

            setIsSDKLoaded(true);
          } catch (initError) {
            console.error('토스페이먼츠 초기화 실패:', initError);
          }
        };
        
        script.onerror = (error) => {
          console.error('토스페이먼츠 SDK 로드 실패:', error);
        };
        
        document.head.appendChild(script);
      } catch (error) {
        console.error('토스페이먼츠 SDK 로드 실패:', error);
      }
    };

    loadTossPayments();
  }, [product.price]);

  useEffect(() => {
    const renderPaymentUI = async () => {
      if (widgets && isSDKLoaded && paymentMethodRef.current && agreementRef.current) {
        console.log('결제 UI 렌더링 시작');
        try {
          await Promise.all([
            // 결제 UI 렌더링
            widgets.renderPaymentMethods({
              selector: '#payment-method-widget',
              variantKey: 'DEFAULT',
            }),
            // 이용약관 UI 렌더링
            widgets.renderAgreement({
              selector: '#agreement-widget',
              variantKey: 'AGREEMENT'
            }),
          ]);
          console.log('결제 UI 렌더링 완료');
        } catch (error) {
          console.error('결제 UI 렌더링 실패:', error);
          console.error('결제 UI 렌더링 실패 상세:', {
            widgets: !!widgets,
            isSDKLoaded,
            paymentMethodElement: !!document.getElementById('payment-method-widget'),
            agreementElement: !!document.getElementById('agreement-widget')
          });
        }
      } else {
        console.log('결제 UI 렌더링 조건 미충족:', {
          widgets: !!widgets,
          isSDKLoaded,
          paymentMethodRef: !!paymentMethodRef.current,
          agreementRef: !!agreementRef.current
        });
      }
    };

    renderPaymentUI();
  }, [widgets, isSDKLoaded]);

  // 실제 토스페이먼츠 결제 요청
  const handlePayment = async () => {
    console.log('결제 요청 시작');
    console.log('customerInfo:', customerInfo);
    console.log('widgets:', widgets);
    console.log('isSDKLoaded:', isSDKLoaded);

    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('수령인명, 연락처, 배송 주소는 필수입니다.');
      return;
    }

    if (!widgets) {
      alert('결제 시스템이 아직 준비되지 않았습니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    setIsProcessing(true);

    try {
      const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      console.log('생성된 주문번호:', orderId);
      
  const paymentData = {
        orderId: orderId,
        orderName: `${product.name} (모두마트)`,
        customerName: customerInfo.name,
        customerEmail: customerInfo.email || 'no-email@modumart.com', // 이메일이 없으면 기본값 사용
        customerMobilePhone: customerInfo.phone,
  successUrl: `${window.location.origin}/payment/success.html`,
  failUrl: `${window.location.origin}/payment/fail.html`,
      };
      
      console.log('결제 요청 데이터:', paymentData);
      
      // 실제 토스페이먼츠 결제 요청
      const result = await widgets.requestPayment(paymentData);
      console.log('결제 요청 결과:', result);
      
    } catch (error) {
      console.error('결제 요청 실패:', error);
      const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
      const errorCode = (error as any)?.code || 'UNKNOWN_ERROR';
      console.error('에러 상세:', errorMessage, errorCode);
      alert(`결제 요청 중 오류가 발생했습니다: ${errorMessage}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">주문/결제</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* 상품 정보 */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">주문 상품</h3>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center text-3xl">
                {product.image}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{product.name}</h4>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-sm text-gray-600">• {product.weight} • {product.origin}</p>
                <p className="text-lg font-bold text-indigo-600 mt-1">{product.price.toLocaleString()}원</p>
              </div>
            </div>
          </div>

          {/* 배송 정보 입력 */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">배송 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  수령인명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="01012345678"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이메일 <span className="text-gray-500">(선택)</span>
                </label>
                <input
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  배송 주소 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-2"
                  placeholder="서울시 강남구 테헤란로 123"
                />
                <input
                  type="text"
                  value={customerInfo.addressDetail}
                  onChange={(e) => setCustomerInfo({...customerInfo, addressDetail: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="상세 주소 (선택)"
                />
              </div>
            </div>
          </div>

          {/* 결제 금액 */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">결제 금액</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">상품 금액</span>
                <span className="font-medium">{product.price.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">배송비</span>
                <span className="font-medium">3,000원</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between text-lg font-bold">
                <span>총 결제 금액</span>
                <span className="text-indigo-600">{(product.price + 3000).toLocaleString()}원</span>
              </div>
            </div>
          </div>

          {/* 결제 수단 선택 - 토스페이먼츠 위젯 */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">결제 수단</h3>
            {isSDKLoaded ? (
              <div id="payment-method-widget" ref={paymentMethodRef} className="mb-4"></div>
            ) : (
              <div className="text-center py-8">
                <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <p className="text-gray-600">결제 수단을 불러오는 중...</p>
              </div>
            )}
          </div>

          {/* 이용약관 동의 - 토스페이먼츠 위젯 */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">이용약관</h3>
            {isSDKLoaded ? (
              <div id="agreement-widget" ref={agreementRef}></div>
            ) : (
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" defaultChecked />
                  <span className="text-sm text-gray-700">개인정보 수집 및 이용 동의 (필수)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" defaultChecked />
                  <span className="text-sm text-gray-700">구매조건 확인 및 결제진행 동의 (필수)</span>
                </label>
              </div>
            )}
          </div>

          {/* 결제 버튼 */}
          <button
            onClick={handlePayment}
            disabled={isProcessing || !isSDKLoaded}
            className={`w-full py-4 rounded-lg font-bold text-lg transition ${
              isProcessing || !isSDKLoaded
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                결제 처리 중...
              </span>
            ) : !isSDKLoaded ? (
              '결제 시스템 준비 중...'
            ) : (
              `${(product.price + 3000).toLocaleString()}원 결제하기`
            )}
          </button>

          {/* 안내 문구 */}
          <div className="text-xs text-gray-500 text-center space-y-1">
            <p>🔒 토스페이먼츠의 안전한 결제 시스템을 사용합니다.</p>
            <p className="font-medium text-indigo-600">
              실제 토스페이먼츠 결제위젯이 연동되었습니다.
            </p>
            <p className="text-gray-400">
              테스트 환경: 실제 금액은 차감되지 않습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
