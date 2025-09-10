import Button from './components/ui/button';
import { Camera, Newspaper, Calculator } from 'lucide-react';
import React, { useState } from 'react';
// Payment functionality removed per request (상품/결제 모듈 제거)

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="flex items-start space-x-4 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-sm">
            <div className="flex-shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </div>
        </div>
    )
}

export default function ModoMartLanding() {
  // 상품/결제 기능 제거: 상태/데이터/구매 핸들러 삭제
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 헤더 */}
      <header className="w-full px-6 py-4 flex items-center justify-between bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="모두의마트 로고"
            width={40}
            height={40}
            className="rounded-full shadow"
          />
          <span className="text-2xl font-semibold text-black tracking-tight">모두의마트</span>
        </div>
      </header>

      {/* 히어로 */}
      <main className="flex-1 px-4 py-16 bg-white">
        {/* 메인 히어로 섹션 - 중앙 집중 레이아웃 */}
        <section className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <div className="text-gray-500 text-xl md:text-2xl font-medium mb-4">
                계산은 쉽게, 쇼핑은 즐겁게
              </div>
              <div className="font-bold leading-tight">
                <span className="text-indigo-600">모두의마트</span>
              </div>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-normal max-w-2xl mx-auto">
              체크리스트, 가격표 스캔, 예산 관리, 영수증 정리까지<br />
              <span className="font-semibold text-gray-900">장보기의 모든 과정을 한 번에.</span>
            </p>
            {/* 다운로드 버튼 - 중앙 정렬 */}
            <div className="flex flex-row gap-4 justify-center mb-12">
              <a
                href="https://play.google.com/store/apps/details?id=com.geonukim.martcalculator&hl=ko"
                className="transition hover:scale-105"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%80%E1%85%AE%E1%84%80%E1%85%B3%E1%86%AF%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5-bGmkurHDcp4IBo6BHPM6XDb6KCmJSa.png"
                  alt="Google Play에서 다운로드"
                  width={160}
                  height={48}
                />
              </a>
              <a
                href="https://apps.apple.com/kr/app/%EB%AA%A8%EB%91%90%EC%9D%98%EB%A7%88%ED%8A%B8-%EA%B0%80%EA%B2%A9%ED%91%9C%EC%8A%A4%EC%BA%90%EB%84%88/id6578441041"
                className="transition hover:scale-105"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A2%E1%86%B8%E1%84%89%E1%85%B3%E1%84%90%E1%85%A9%E1%84%8B%E1%85%A5-02-H4LNroXGZKHuLpd1QdTv3xqo2CyK62.png"
                  alt="App Store에서 다운로드"
                  width={160}
                  height={48}
                />
              </a>
            </div>
            
            {/* 스크린샷 - 중앙에 작은 크기로 */}
            <div className="flex flex-row gap-3 justify-center items-center">
              <img
                src="/images/screenshot1.png"
                alt="모두의마트 앱 스크린샷1"
                className="rounded-2xl shadow-2xl w-[140px] sm:w-[200px] md:w-[240px] lg:w-[280px] border border-gray-200"
              />
              <img
                src="/images/screenshot2.png"
                alt="모두의마트 앱 스크린샷2"
                className="rounded-2xl shadow-2xl w-[140px] sm:w-[200px] md:w-[240px] lg:w-[280px] border border-gray-200"
              />
            </div>
          </div>
        </section>

  {/* 상품 및 결제 섹션 제거됨 */}

        {/* 주요 특징 섹션 */}
        <section className="w-full max-w-4xl mx-auto mt-20 mb-20">
          {/* 섹션 타이틀 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">주요 특징</h2>
            <p className="text-lg text-gray-600">모두의마트가 제공하는 스마트한 쇼핑 기능들을 확인해보세요</p>
          </div>
          
          {/* 기능 카드들 - 2x3 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition border border-gray-100">
              <div className="bg-indigo-50 text-indigo-600 rounded-full p-4 mb-4 text-2xl">📝</div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">장보기 체크리스트</h3>
              <p className="text-gray-600 text-sm text-center font-normal leading-relaxed">
                필요한 상품을 미리 등록하고<br />체계적으로 장보기 계획
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition border border-gray-100">
              <div className="bg-blue-50 text-blue-600 rounded-full p-4 mb-4 text-2xl">🧮</div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">마트 계산기</h3>
              <p className="text-gray-600 text-sm text-center font-normal leading-relaxed">
                상품 가격을 입력하고<br />총 금액을 실시간으로 계산
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition border border-gray-100">
              <div className="bg-pink-50 text-pink-600 rounded-full p-4 mb-4 text-2xl">📸</div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">가격표 스캐너</h3>
              <p className="text-gray-600 text-sm text-center font-normal leading-relaxed">
                가격표를 카메라로 찍으면<br />자동으로 인식하여 등록
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition border border-gray-100">
              <div className="bg-green-50 text-green-600 rounded-full p-4 mb-4 text-2xl">🧾</div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">영수증 스캐너</h3>
              <p className="text-gray-600 text-sm text-center font-normal leading-relaxed">
                영수증을 스캔하여<br />자동으로 가계부에 기록
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition border border-gray-100">
              <div className="bg-purple-50 text-purple-600 rounded-full p-4 mb-4 text-2xl">💰</div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">가계부</h3>
              <p className="text-gray-600 text-sm text-center font-normal leading-relaxed">
                지출 내역을 체계적으로 관리하고<br />소비 패턴을 분석
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition border border-gray-100">
              <div className="bg-orange-50 text-orange-600 rounded-full p-4 mb-4 text-2xl">📰</div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">마트 전단지 모음</h3>
              <p className="text-gray-600 text-sm text-center font-normal leading-relaxed">
                이마트, 홈플러스, 코스트코 등<br />전국 마트 전단지 한눈에
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-white text-gray-600 py-8 px-4 text-sm border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          {/* 사업자 정보 */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">사업자 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div><span className="font-semibold">상호명:</span> 라이프라인</div>
                <div><span className="font-semibold">대표자:</span> 김건우</div>
                <div><span className="font-semibold">사업자등록번호:</span> 160-07-03064</div>
                <div><span className="font-semibold">통신판매업신고:</span> 제 2025-경기파주-3357호</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">주소:</span> 경기도 파주시 교하로 100, 910동 104호</div>
                <div><span className="font-semibold">전화번호:</span> 050-6724-3619</div>
                <div><span className="font-semibold">이메일:</span> <a href="mailto:er4t@naver.com" className="text-indigo-600 hover:underline">er4t@naver.com</a></div>
              </div>
            </div>
          </div>
          
          {/* 추가 정보 */}
          <div className="text-center space-y-2 text-xs text-gray-500">
            <div>개인정보보호책임자: 김건우</div>
            <div>
              <a href="/privacy.html" 
                 className="underline hover:text-indigo-600">개인정보 처리방침</a>
              {" | "}
              <a href="/terms.html" 
                 className="underline hover:text-indigo-600">서비스 이용약관</a>
            </div>
            <div className="pt-2 border-t border-gray-200">
              © {new Date().getFullYear()} 라이프라인. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

  {/* 결제 모달 제거됨 */}
    </div>
  );
}