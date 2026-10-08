const venues = [
  {group:'㈜파라다이스',name:'파라다이스카지노 워커힐점',region:'서울',address:'서울 광진구 워커힐로 177',sales:342228,visitors:476757,permit:'1968-03-05',site:'https://www.paradisecasino.co.kr/',siteLabel:'파라다이스 카지노'},
  {group:'㈜파라다이스',name:'파라다이스카지노 부산지점',region:'부산',address:'부산 해운대구 해운대해변로 296',sales:58073,visitors:100098,permit:'1978-10-29',site:'https://www.paradisecasino.co.kr/',siteLabel:'파라다이스 카지노'},
  {group:'㈜파라다이스',name:'파라다이스카지노 제주지점',region:'제주',address:'제주 제주시 노연로 80',sales:23898,visitors:101071,permit:'1990-09-01',site:'https://www.paradisecasino.co.kr/',siteLabel:'파라다이스 카지노'},
  {group:'그랜드코리아레저㈜',name:'세븐럭카지노 강남코엑스점',region:'서울',address:'서울 강남구 테헤란로87길 58',sales:205608,visitors:362045,permit:'2005-01-28',site:'https://www.7luck.com/',siteLabel:'세븐럭'},
  {group:'그랜드코리아레저㈜',name:'세븐럭카지노 서울드래곤시티점',region:'서울',address:'서울 용산구 청파로20길 95',sales:150667,visitors:571622,permit:'2005-01-28',site:'https://www.7luck.com/',siteLabel:'세븐럭',history:'강북힐튼점 → 서울드래곤시티점 · 2022년 12월 영업장 이전',historyUrl:'https://www.mt.co.kr/culture/2023/01/11/2023011109305759535'},
  {group:'그랜드코리아레저㈜',name:'세븐럭카지노 부산롯데점',region:'부산',address:'부산 부산진구 가야대로 772',sales:69051,visitors:183498,permit:'2005-01-28',site:'https://www.7luck.com/',siteLabel:'세븐럭'},
  {group:'㈜파라다이스세가사미',name:'파라다이스카지노 파라다이스시티',region:'인천',address:'인천 중구 영종해안남로321길 186',sales:485411,visitors:435020,permit:'1967-08-10',site:'https://www.paradisecasino.co.kr/',siteLabel:'파라다이스 카지노'},
  {group:'㈜인스파이어 인티그레이티드 리조트',name:'인스파이어카지노',region:'인천',address:'인천 중구 공항문화로 127',sales:286009,visitors:379161,permit:'2024-01-23',site:'https://www.hilton.com/ko/hotels/gmpikhi-inspire-entertainment-resort/things-to-do/casino/',siteLabel:'인스파이어 카지노 안내'},
  {group:'㈜지바스',name:'알펜시아카지노',region:'강원',address:'강원 평창군 대관령면 솔봉로 325',sales:0,visitors:0,permit:'1980-12-09',uncertain:'현재 영업 여부 미확인'},
  {group:'㈜골든크라운',name:'호텔인터불고대구카지노',region:'대구',address:'대구 수성구 팔현길 212',sales:20140,visitors:71960,permit:'1979-04-11'},
  {group:'길상창휘(유)',name:'제주완리카지노',region:'제주',address:'제주 제주시 탑동로 66',sales:0,visitors:0,permit:'1975-10-15',history:'공즈카지노 → 제주완리카지노 · 변경일 미확인',historyUrl:'https://kind.krx.co.kr/external/2026/05/15/001495/20260515003265/11013.htm',uncertain:'2026년 4월 휴업 보도 · 10월 채용 공고 · 재개장 여부 미확인'},
  {group:'㈜청해',name:'세븐스타카지노',region:'제주',address:'제주 서귀포시 중문관광로72번길 35',sales:40949,visitors:36722,permit:'1991-07-31'},
  {group:'㈜건하',name:'제주오리엔탈카지노',region:'제주',address:'제주 제주시 탑동로 47',sales:656,visitors:15473,permit:'1990-11-06',site:'https://www.oriental.co.kr/view/viewLink.do?page=homepage%2FKOR%2Ffacility%2Fcasino',siteLabel:'호텔 카지노 안내'},
  {group:'㈜엘티엔터테인먼트',name:'드림타워카지노',region:'제주',address:'제주 제주시 노연로 12',sales:520646,visitors:590332,permit:'1985-04-11',site:'https://www.jejudreamtower.com/kor/things/MyItineraryForm.jdt',siteLabel:'제주 드림타워'},
  {group:'헤븐㈜',name:'블루원카지노',region:'제주',address:'제주 제주시 삼무로 67',sales:379,visitors:8304,permit:'1990-09-01',history:'제주썬카지노 → 블루원카지노 · 2026년 3월 개장',historyUrl:'https://www.fnnews.com/news/202603201357263014',companyHistory:'2025 통계 법인: ㈜지앤엘'},
  {group:'람정엔터테인먼트코리아㈜',name:'레스에이카지노',region:'제주',address:'제주 서귀포시 안덕면 신화역사로304번길 38',sales:54186,visitors:153977,permit:'1990-09-01',history:'랜딩카지노 → 레스에이카지노 · 2025년 9월 발표',historyUrl:'https://www.headlinejeju.co.kr/news/articleView.html?idxno=576985',site:'https://www.lesajeju.com/',siteLabel:'레스에이',siteNote:'협회 등재 · 접속 미확인'},
  {group:'㈜펠릭스 / ㈜금산',name:'펠릭스 카지노',region:'제주',address:'제주 서귀포시 중문관광로72번길 75',sales:5861,visitors:8011,permit:'1995-12-28',history:'골드마운틴카지노 → 펠릭스 카지노 명칭 사용 · 공식 변경일 미확인',historyUrl:'https://www.jobkorea.co.kr/company/42285432/recruit',companyHistory:'채용 자료: ㈜펠릭스 / 통계·공시: ㈜금산',site:'http://felixcasino.co.kr',siteLabel:'펠릭스',siteNote:'회사 프로필 등재 · 접속 미확인',uncertain:'허가증상 명칭·법인 변경일 미확인'}
];

const format = new Intl.NumberFormat('ko-KR');
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const search = document.querySelector('#search');
const region = document.querySelector('#region');
const history = document.querySelector('#history');
const groupsNode = document.querySelector('#groups');

function renderVenue(item) {
  const historyMarkup = item.history ? `<div class="history">${escapeHtml(item.history)} <a href="${escapeHtml(item.historyUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(item.name)} 변경 이력 근거">근거 ↗</a></div>` : '';
  const uncertainMarkup = item.uncertain ? `<div class="history uncertain">${escapeHtml(item.uncertain)}</div>` : '';
  const siteMarkup = item.site ? `<a class="site-link" href="${escapeHtml(item.site)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.siteLabel)} ↗</a>${item.siteNote ? `<div class="site-note">${escapeHtml(item.siteNote)}</div>` : ''}` : '<span class="no-site">확인 안 됨</span>';
  return `<article class="venue"><div><div class="venue-name">${escapeHtml(item.name)}</div><div class="venue-meta">${escapeHtml(item.region)} · 최초 허가 ${escapeHtml(item.permit)}</div><div class="venue-address">${escapeHtml(item.address)}</div>${historyMarkup}${uncertainMarkup}</div><div><span class="cell-label">운영 법인 참고</span><div class="venue-meta">${item.companyHistory ? escapeHtml(item.companyHistory) : '현재 표기 기준'}</div></div><div><span class="cell-label">2025 매출액</span><span class="metric">${format.format(item.sales)} <small>백만 원</small></span><span class="cell-label" style="margin-top:13px">2025 입장객</span><span class="metric">${format.format(item.visitors)} <small>명</small></span></div><div><span class="cell-label">사이트</span>${siteMarkup}</div></article>`;
}

function render() {
  const query = search.value.trim().toLocaleLowerCase('ko-KR');
  const items = venues.filter(item => {
    const text = [item.group,item.name,item.region,item.address,item.history,item.companyHistory].filter(Boolean).join(' ').toLocaleLowerCase('ko-KR');
    return (!query || text.includes(query)) && (region.value === 'all' || item.region === region.value) && (history.value === 'all' || history.value === 'changed' && !!item.history || history.value === 'uncertain' && !!item.uncertain);
  });
  const grouped = new Map();
  items.forEach(item => { if (!grouped.has(item.group)) grouped.set(item.group, []); grouped.get(item.group).push(item); });
  groupsNode.innerHTML = [...grouped].map(([name, groupItems]) => `<section class="group" aria-label="${escapeHtml(name)}"><div class="group-header"><h3>${escapeHtml(name)}</h3><small>${groupItems.length}개 영업장</small></div><div class="group-list">${groupItems.map(renderVenue).join('')}</div></section>`).join('');
  document.querySelector('#result-count').textContent = `${items.length}개 영업장 · ${grouped.size}개 법인 그룹`;
  document.querySelector('#empty').hidden = items.length > 0;
}

document.querySelector('#stat-venues').textContent = format.format(venues.length);
document.querySelector('#stat-sales').textContent = `${(venues.reduce((sum, item) => sum + item.sales, 0) / 1000000).toFixed(2)}조`;
document.querySelector('#stat-visitors').textContent = `${Math.round(venues.reduce((sum, item) => sum + item.visitors, 0) / 10000)}만`;
document.querySelector('#stat-changes').textContent = format.format(venues.filter(item => item.history).length);
[search,region,history].forEach(control => control.addEventListener(control === search ? 'input' : 'change', render));
render();
