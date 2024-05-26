import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='status-bar-iphone-x'>
        <div className='left-side'>
          <div className='time'>
            <div className='colon' />
          </div>
        </div>
        <div className='right-side'>
          <div className='wifi' />
          <div className='battery' />
          <div className='mobile-signal' />
        </div>
      </div>
      <div className='flex-row-be'>
        <div className='pasted-graphic' />
        <div className='line-stroke' />
        <div className='line-stroke-1' />
        <div className='line-stroke-2' />
      </div>
      <div className='flex-row'>
        <div className='tabs'>
          <div className='pill'>
            <span className='total-accumulation'>총 적립</span>
          </div>
          <div className='pill-3'>
            <span className='this-month-accumulation'>이번달 적립</span>
          </div>
          <div className='pill-4'>
            <span className='exchange-history'>교환 내역</span>
          </div>
        </div>
        <div className='search' />
      </div>
      <div className='stats'>
        <div className='card'>
          <span className='total-accumulation-amount'>총 적립 금액</span>
          <span className='amount'>53,289 원</span>
          <span className='planted-pine-trees'>
            소나무 38그루를 심으셨네요!
          </span>
        </div>
        <div className='card-5'>
          <span className='exchangeable-amount'>교환 가능 금액</span>
          <span className='ten-thousand-won'>10,823 원</span>
          <span className='auto-renewal'>10일 뒤 자동 소진돼요!</span>
        </div>
      </div>
      <div className='chart'>
        <span className='type-ratio'>종류별 비율</span>
        <div className='flex-row-b'>
          <div className='vector' />
          <div className='vector-6' />
          <div className='vector-7' />
          <div className='vector-8' />
          <span className='current-status'>(6월 4일 현황)</span>
          <div className='vector-9' />
          <div className='vector-a' />
          <span className='total'>총</span>
          <span className='times'>245회</span>
          <span className='accumulated'>적립하셨어요!</span>
        </div>
        <div className='vector-b' />
        <div className='flex-row-c'>
          <span className='pet-percent'>PET 55 %</span>
          <span className='paper-percent'>종이 28 %</span>
          <span className='other-percent'>기타 17 %</span>
          <div className='vector-d' />
          <div className='group' />
          <div className='vector-e' />
          <div className='vector-f' />
        </div>
      </div>
      <div className='flex-row-ff'>
        <div className='mascot' />
        <div className='list'>
          <span className='recycling-inconvenient'>분리수거, 귀찮으시죠?</span>
          <span className='recycling-join'>
            버리와 함께
            <br />
            올바른 분리수거에 <br />
            동참하시고 적립금도 받으세요!
          </span>
        </div>
      </div>
      <div className='flex-row-a'>
        <div className='button'>
          <span className='add-to-cart'>Add to cart</span>
        </div>
        <div className='tab-bar'>
          <div className='tabs-10'>
            <div className='tab-bar-item'>
              <div className='profile-image' />
            </div>
            <div className='tab-bar-item-11' />
            <div className='tab-bar-item-12' />
            <div className='profile-image-13' />
            <div className='button-14'>
              <span className='scan-button'>스캔하기</span>
            </div>
          </div>
          <span className='qna'>QnA</span>
          <span className='my-info'>내 정보</span>
          <div className='home-indicator'>
            <div className='home-indicator-15' />
          </div>
        </div>
      </div>
    </div>
  );
}
