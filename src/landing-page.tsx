import Button from './components/ui/button';
import { Camera, Newspaper, Calculator } from 'lucide-react';
import React from 'react';

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
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
                <div className="flex items-center justify-center">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lauchimage-iUEsgZnDMFo4g5yyEtro0YmUMSc0Ju.png"
                        alt="모두의마트 로고"
                        width={32}
                        height={32}
                        className="mr-2"
                    />
                    <span className="text-2xl font-bold">모두의마트</span>
                </div>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
                                스마트한 쇼핑의 시작, 모두의마트
                            </h1>
                            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-6">
                                합리적인 소비와 편리한 쇼핑을 위한 당신의 최고의 파트너
                            </p>
                            <div className="flex flex-row gap-4 justify-center">
                                <a href="https://play.google.com/store/apps/details?id=com.geonukim.martcalculator&hl=ko"
                                    className="hover:opacity-90">
                                    <img
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%80%E1%85%AE%E1%84%80%E1%85%B3%E1%86%AF%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5-bGmkurHDcp4IBo6BHPM6XDb6KCmJSa.png"
                                        alt="Google Play에서 다운로드"
                                        width={160}
                                        height={48}
                                    />
                                </a>
                                <a href="https://apps.apple.com/kr/app/%EB%AA%A8%EB%91%90%EC%9D%98%EB%A7%88%ED%8A%B8-%EA%B0%80%EA%B2%A9%ED%91%9C%EC%8A%A4%EC%BA%90%EB%84%88/id6578441041"
                                    className="hover:opacity-90">
                                    <img
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A2%E1%86%B8%E1%84%89%E1%85%B3%E1%84%90%E1%85%A9%E1%84%8B%E1%85%A5-02-H4LNroXGZKHuLpd1QdTv3xqo2CyK62.png"
                                        alt="App Store에서 다운로드"
                                        width={160}
                                        height={48}
                                    />
                                </a>
                            </div>
                            <div className="mt-12 flex justify-center">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover2-nsft8uHRWFpJ4CniZhXZS1YC0gK19S.png"
                                    alt="모두의마트 앱 소개 - 가격표 스캔으로 미리 계산해보세요"
                                    width={600}
                                    height={400}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <h2 className="text-3xl md:text-4xl font-semibold text-center my-8">
                    모두의마트 주요 기능
                </h2>


                <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                    <div className="container px-4 md:px-6">

                        <div className="flex flex-col space-y-12 max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">간편한 마트 계산기</h3>
                                        <p className="text-gray-500">상품명과 가격을 쉽게 입력하여 금액을 미리 계산해보세요.</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <img
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screensot1-o4GgJnQ6iEMeBTgkBWPlNYRxCASUwV.png"
                                        alt="마트 계산기 스크린샷"
                                        width={300}
                                        height={400}
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1 order-2 md:order-1">
                                    <img
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screensot2-l4oteT7dvx3KA96BUmbGkoqlX3cGEP.png"
                                        alt="가격표 스캐너 스크린샷"
                                        width={300}
                                        height={400}
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="flex-1 order-1 md:order-2">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">가격표 스캐너</h3>
                                        <p className="text-gray-500">가격표를 스캔하여 상품 정보를 빠르게 등록할 수 있어요.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">마트 전단지 모음</h3>
                                        <p className="text-gray-500">이마트, 트레이더스, 홈플러스, 코스트코 등의 전단지를 한 눈에 확인하세요.</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <img
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screensot3-eK0s9tNgQhTWqW2T2d9e381nmBJ9sO.png"
                                        alt="마트 전단지 스크린샷"
                                        width={300}
                                        height={400}
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <footer className="bg-gray-100 text-gray-600 py-4 px-4 md:px-6">
                <div className="container mx-auto text-xs">
                    <div className="mt-4 flex justify-center space-x-4">
                        <p className="leading-snug text-center md:text-left">라이프라인 | 사업자등록번호 160-07-03064 | 대표이사 김건우 | 개인정보보호책임자 김건우</p>
                    </div>
                    <div className="mt-4 flex justify-center space-x-4">
                        <p className="leading-snug text-center md:text-left">경기도 파주시 교하로 100, 910동 104호 | 고객지원 <a href="mailto:er4t@naver.com" className="hover:underline">er4t@naver.com</a></p>
                    </div>
                    <div className="mt-4 flex justify-center space-x-4">
                        <a href="https://plip.kr/pcc/64aa0503-b4fa-47f1-895c-dbbcb26ec555/privacy/2.html" className="hover:underline">개인정보 처리방침</a>
                    </div>
                    <div className="mt-2 text-center text-[10px]">
                        © {new Date().getFullYear()} 라이프라인. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}