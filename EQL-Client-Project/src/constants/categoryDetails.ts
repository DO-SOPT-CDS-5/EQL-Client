/** 각 카테고리 항목(일단 의류만) 눌렀을 때 나오는 아이템 데이터 */
type CategoryDetailsType = {
  english:string;
  korean:string;
}

export const CATEGORYDETAILS:CategoryDetailsType[]=[
  {
    english:"ALL",
    korean:"전체"
  },
  {
    english:"Outer",
    korean:"아우터"
  },
  {
    english:"Knitwear",
    korean:"니트"
  },
  {
    english:"T-Shirts",
    korean:"티셔츠"
  },
  {
    english:"Sweats / Hoodies",
    korean:"스웨트 셔츠 / 후디"
  },
  {
    english:"Shirts",
    korean:"셔츠"
  },
  {
    english:"Pants",
    korean:"팬츠"
  },
  {
    english:"One-piece",
    korean:"원피스"
  },
  {
    english:"Skirt",
    korean:"스커트"
  },
  {
    english:"Loungewear",
    korean:"라운지웨어"
  },
  {
    english:"Underwear",
    korean:"언더웨어"
  },
  {
    english:"Activewear",
    korean:"애슬레저 / 수영복"
  },
];