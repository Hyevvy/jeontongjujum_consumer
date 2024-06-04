# Jeontongjujum consumer 🚐

> 전통주, 마침표를 찍다. 전통주. 

---

## ✨ 데모

현재는 도메인이 끊긴 상태입니다.

https://jeontongju-front-consumer.vercel.app
https://jeontongju.shop

<br>

## 🚪 프로젝트 소개

2023/11 ~ 2024/01

---

- 2030세대에게 진입장벽이 높은 전통주를 널리 알리고자 기획하였습니다.
- 타겟유저층에 맞게 쇼츠, 라이브경매, 검색 추천 세 가지의 메인 기능을 가지고 있습니다.

---

<br>

## 🙋🏻 팀원 소개

프론트 1명, 백엔드 4명

<br>

## ⚙️ 개발환경

### 💪 언어 & 라이브러리

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white">
![ESLint](https://img.shields.io/badge/ESLint-4B32C3.svg?&style=for-the-badge&logo=ESLint&logoColor=white)
![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


### 🔧 도구

![Git](https://img.shields.io/badge/Git-F05032.svg?&style=for-the-badge&logo=Git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)
![Discord](https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

---

<br>

## 설치 및 실행

- 설치 : $ `npm install`
- 실행 : $ `npm run dev or
yarn dev or pnpm dev or
bun dev`

<br>

---

<br>

## 폴더 구조
```
📦src
 ┣ 📂apis
 ┃ ┣ 📂auction
 ┃ ┃ ┣ 📜auctionAPIService.ts
 ┃ ┃ ┗ 📜auctionAPIService.types.ts
 ┃ ┣ 📂authentication
 ┃ ┃ ┣ 📜authenticationAPIService.ts
 ┃ ┃ ┗ 📜authenticationAPIService.types.ts
 ┃ ┣ 📂consumer
 ┃ ┃ ┣ 📜consumerAPIService.ts
 ┃ ┃ ┗ 📜consumerAPIservice.types.ts
 ┃ ┣ 📂coupon
 ┃ ┃ ┣ 📜couponAPIService.ts
 ┃ ┃ ┗ 📜couponAPIService.types.ts
 ┃ ┣ 📂notification
 ┃ ┃ ┣ 📜notificationAPIService.ts
 ┃ ┃ ┗ 📜notificationAPIService.types.ts
 ┃ ┣ 📂order
 ┃ ┃ ┣ 📜orderAPIService.ts
 ┃ ┃ ┗ 📜orderAPIService.types.ts
 ┃ ┣ 📂payment
 ┃ ┃ ┣ 📜paymentAPIService.ts
 ┃ ┃ ┗ 📜paymentAPIService.types.ts
 ┃ ┣ 📂product
 ┃ ┃ ┣ 📜productAPIService.ts
 ┃ ┃ ┗ 📜productAPIService.types.ts
 ┃ ┣ 📂review
 ┃ ┃ ┣ 📜reviewAPIService.ts
 ┃ ┃ ┗ 📜reviewAPIService.types.ts
 ┃ ┣ 📂search
 ┃ ┃ ┣ 📜searchAPIService.ts
 ┃ ┃ ┗ 📜searchAPIService.types.ts
 ┃ ┣ 📂seller
 ┃ ┃ ┣ 📜sellerAPIService.ts
 ┃ ┃ ┗ 📜sellerAPIService.types.ts
 ┃ ┣ 📂storage
 ┃ ┃ ┣ 📜storageAPIService.ts
 ┃ ┃ ┗ 📜storageAPIservice.types.ts
 ┃ ┣ 📂wishCart
 ┃ ┃ ┣ 📜wishAPIService.ts
 ┃ ┃ ┗ 📜wishAPIService.types.ts
 ┃ ┗ 📜common.ts
 ┣ 📂app
 ┃ ┣ 📂(loginLayout)
 ┃ ┃ ┣ 📂init
 ┃ ┃ ┃ ┣ 📂adult
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂callback
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂findMyPassword
 ┃ ┃ ┃ ┃ ┣ 📜findMyPassword.module.css
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂logout
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂signin
 ┃ ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜signin.module.css
 ┃ ┃ ┃ ┗ 📂signup
 ┃ ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜signup.module.css
 ┃ ┃ ┗ 📜layout.tsx
 ┃ ┣ 📂(mainLayout)
 ┃ ┃ ┣ 📂_component
 ┃ ┃ ┃ ┣ 📂CategoryHeader
 ┃ ┃ ┃ ┃ ┣ 📜CategoryHeader.module.css
 ┃ ┃ ┃ ┃ ┗ 📜CategoryHeader.tsx
 ┃ ┃ ┃ ┣ 📂Cost
 ┃ ┃ ┃ ┃ ┗ 📜CostContainer.tsx
 ┃ ┃ ┃ ┣ 📂CouponBox
 ┃ ┃ ┃ ┃ ┣ 📜CouponBox.module.css
 ┃ ┃ ┃ ┃ ┗ 📜CouponBox.tsx
 ┃ ┃ ┃ ┣ 📂Crop
 ┃ ┃ ┃ ┃ ┣ 📜CropContainer.module.css
 ┃ ┃ ┃ ┃ ┗ 📜CropContainer.tsx
 ┃ ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┃ ┣ 📜Footer.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┃ ┣ 📜Header.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Header.tsx
 ┃ ┃ ┃ ┣ 📂Holiday
 ┃ ┃ ┃ ┃ ┗ 📜HolidayContainer.tsx
 ┃ ┃ ┃ ┣ 📂MemberShipBox
 ┃ ┃ ┃ ┃ ┣ 📜MemberShipBox.tsx
 ┃ ┃ ┃ ┃ ┗ 📜membershipBox.module.css
 ┃ ┃ ┃ ┣ 📂Noti
 ┃ ┃ ┃ ┃ ┣ 📜Noti.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜Noti.tsx
 ┃ ┃ ┃ ┣ 📂PaidMemberShipBox
 ┃ ┃ ┃ ┃ ┣ 📜PaidMemberShipBox.module.css
 ┃ ┃ ┃ ┃ ┗ 📜PaidMemberShipBox.tsx
 ┃ ┃ ┃ ┣ 📂PointCreditBox
 ┃ ┃ ┃ ┃ ┣ 📜PointCreditBox.module.css
 ┃ ┃ ┃ ┃ ┗ 📜PointCreditBox.tsx
 ┃ ┃ ┃ ┣ 📂ProductContainer
 ┃ ┃ ┃ ┃ ┣ 📜ProductContainer.module.css
 ┃ ┃ ┃ ┃ ┗ 📜ProductContainer.tsx
 ┃ ┃ ┃ ┣ 📂QualityInput
 ┃ ┃ ┃ ┃ ┗ 📜QualityInput.tsx
 ┃ ┃ ┃ ┣ 📂Seller
 ┃ ┃ ┃ ┃ ┗ 📜PopularContainer.tsx
 ┃ ┃ ┃ ┣ 📂SoPTBox
 ┃ ┃ ┃ ┃ ┣ 📜SoPTBox.module.css
 ┃ ┃ ┃ ┃ ┗ 📜SoPTBox.tsx
 ┃ ┃ ┃ ┗ 📜RQProvider.tsx
 ┃ ┃ ┣ 📂auction
 ┃ ┃ ┃ ┣ 📂[auctionId]
 ┃ ┃ ┃ ┃ ┣ 📜auction.module.css
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂list
 ┃ ┃ ┃ ┃ ┣ 📜auctionList.module.css
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂category
 ┃ ┃ ┃ ┗ 📂[categoryId]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂event
 ┃ ┃ ┃ ┣ 📂cost
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂crop
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂holiday
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂membership
 ┃ ┃ ┃ ┣ 📂buy
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂list
 ┃ ┃ ┃ ┃ ┣ 📜membershiplist.module.css
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜membership.module.css
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┣ 📂_component
 ┃ ┃ ┃ ┃ ┣ 📂MyAddressAddBox
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MyAddressAddBox.module.css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyAddressAddBox.tsx
 ┃ ┃ ┃ ┃ ┣ 📂MyAddressBox
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MyAddressBox.module.css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyAddressBox.tsx
 ┃ ┃ ┃ ┃ ┣ 📂MyAuctionBox
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MyAuctionBox.module.css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyAuctionBox.tsx
 ┃ ┃ ┃ ┃ ┣ 📂MyAuctionList
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyAuctionList.tsx
 ┃ ┃ ┃ ┃ ┣ 📂MyCartBox
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MyCartBox.module.css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyCartBox.tsx
 ┃ ┃ ┃ ┃ ┣ 📂MyCartList
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyCartList.tsx
 ┃ ┃ ┃ ┃ ┣ 📂MyInfoBox
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MyInfoBox.module.css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyInfoBox.tsx
 ┃ ┃ ┃ ┃ ┣ 📂MyOrderBox
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MyOrderBox.module.css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyOrderBox.tsx
 ┃ ┃ ┃ ┃ ┣ 📂MyOrderList
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyOrderList.tsx
 ┃ ┃ ┃ ┃ ┣ 📂MyReviewBox
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MyReviewBox.module.css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyReviewBox.tsx
 ┃ ┃ ┃ ┃ ┣ 📂MyReviewList
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyReviewList.tsx
 ┃ ┃ ┃ ┃ ┣ 📂MyWishList
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MyWishList.tsx
 ┃ ┃ ┃ ┃ ┗ 📜MyList.module.css
 ┃ ┃ ┃ ┣ 📂_lib
 ┃ ┃ ┃ ┃ ┣ 📜getMyAuctionList.ts
 ┃ ┃ ┃ ┃ ┣ 📜getMyCartList.ts
 ┃ ┃ ┃ ┃ ┣ 📜getMyCouponList.ts
 ┃ ┃ ┃ ┃ ┣ 📜getMyWishList.ts
 ┃ ┃ ┃ ┃ ┗ 📜useGetMyInfiniteCartList.ts
 ┃ ┃ ┃ ┣ 📂credit
 ┃ ┃ ┃ ┃ ┣ 📂buy
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📂list
 ┃ ┃ ┃ ┃ ┃ ┣ 📜creditList.module.css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂myaddress
 ┃ ┃ ┃ ┃ ┣ 📜myaddress.module.css
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂myauction
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂mycart
 ┃ ┃ ┃ ┃ ┣ 📜mycart.module.css
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂mycoupon
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂myinfo
 ┃ ┃ ┃ ┃ ┣ 📂_component
 ┃ ┃ ┃ ┃ ┃ ┣ 📂EditMyInfo
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜EditMyInfo.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📂EditMyPassword
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜EditMyPassword.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📂Withdraw
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Withdraw.tsx
 ┃ ┃ ┃ ┃ ┣ 📜myinfo.module.css
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂myorder
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂myreview
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂mywish
 ┃ ┃ ┃ ┃ ┣ 📜mywish.module.css
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂point
 ┃ ┃ ┃ ┃ ┗ 📂list
 ┃ ┃ ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜pointList.module.css
 ┃ ┃ ┃ ┣ 📜mypage.module.css
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂order
 ┃ ┃ ┃ ┣ 📂order-fail
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂order-success
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂orderdetail
 ┃ ┃ ┃ ┗ 📂[ordersId]
 ┃ ┃ ┃ ┃ ┣ 📜orderDetail.module.css
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂payment
 ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜payment.module.css
 ┃ ┃ ┣ 📂product
 ┃ ┃ ┃ ┣ 📂[productId]
 ┃ ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜product.module.css
 ┃ ┃ ┃ ┣ 📂_component
 ┃ ┃ ┃ ┃ ┗ 📂ProductReviewContainer
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ProductReviewContainer.tsx
 ┃ ┃ ┃ ┗ 📂list
 ┃ ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜productList.module.css
 ┃ ┃ ┣ 📂review
 ┃ ┃ ┃ ┣ 📂_component
 ┃ ┃ ┃ ┃ ┗ 📂ProductReviewBox
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductReviewBox.module.css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ProductReviewBox.tsx
 ┃ ┃ ┃ ┗ 📂create
 ┃ ┃ ┃ ┃ ┗ 📂[productId]
 ┃ ┃ ┃ ┃ ┃ ┗ 📂[productOrderId]
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜page.module.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂seller
 ┃ ┃ ┃ ┣ 📂[sellerId]
 ┃ ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜seller.module.css
 ┃ ┃ ┃ ┣ 📂_component
 ┃ ┃ ┃ ┃ ┣ 📜AllProducts.tsx
 ┃ ┃ ┃ ┃ ┣ 📜AllShorts.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Seller.tsx
 ┃ ┃ ┃ ┃ ┣ 📜SellerInfo.tsx
 ┃ ┃ ┃ ┃ ┣ 📜SellerList.tsx
 ┃ ┃ ┃ ┃ ┗ 📜sellerList.module.css
 ┃ ┃ ┃ ┣ 📂_lib
 ┃ ┃ ┃ ┃ ┗ 📜getSellerList.ts
 ┃ ┃ ┃ ┗ 📂list
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂shorts
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜shortsDetail.module.css
 ┃ ┃ ┃ ┗ 📂list
 ┃ ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜shortsList.module.css
 ┃ ┃ ┣ 📜globals.css
 ┃ ┃ ┗ 📜layout.tsx
 ┃ ┣ 📂_component
 ┃ ┃ ┣ 📂CartButton
 ┃ ┃ ┃ ┣ 📜CartButton.module.css
 ┃ ┃ ┃ ┗ 📜CartButton.tsx
 ┃ ┃ ┣ 📂ConceptCard
 ┃ ┃ ┃ ┗ 📜ConceptCard.tsx
 ┃ ┃ ┣ 📂Loading
 ┃ ┃ ┃ ┣ 📜Loading.module.css
 ┃ ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┃ ┣ 📂RateCard
 ┃ ┃ ┃ ┗ 📜RateCard.tsx
 ┃ ┃ ┣ 📂RawMaterialCard
 ┃ ┃ ┃ ┣ 📜RawMaterialCard.module.css
 ┃ ┃ ┃ ┗ 📜RawMaterialCard.tsx
 ┃ ┃ ┣ 📂Select
 ┃ ┃ ┃ ┣ 📜Select.module.css
 ┃ ┃ ┃ ┗ 📜Select.tsx
 ┃ ┃ ┣ 📂SnackCard
 ┃ ┃ ┃ ┣ 📜SnackCard.module.css
 ┃ ┃ ┃ ┗ 📜SnackCard.tsx
 ┃ ┃ ┣ 📂TopButton
 ┃ ┃ ┃ ┣ 📜TopButton.module.css
 ┃ ┃ ┃ ┗ 📜TopButton.tsx
 ┃ ┃ ┣ 📂_assets
 ┃ ┃ ┃ ┗ 📜fi-sr-shopping-cart.svg
 ┃ ┃ ┣ 📂pangpang
 ┃ ┃ ┃ ┣ 📜firework.scss
 ┃ ┃ ┃ ┗ 📜page.js
 ┃ ┃ ┣ 📜AddressSearch.tsx
 ┃ ┃ ┣ 📜Alert.ts
 ┃ ┃ ┣ 📜AuctionContainer.tsx
 ┃ ┃ ┣ 📜Banner.tsx
 ┃ ┃ ┣ 📜ImageUploader.tsx
 ┃ ┃ ┣ 📜MainProductContainer.tsx
 ┃ ┃ ┣ 📜MainReviewContainer.tsx
 ┃ ┃ ┣ 📜MainShortsContainer.tsx
 ┃ ┃ ┣ 📜SEO.tsx
 ┃ ┃ ┗ 📜SuccessBid.ts
 ┃ ┣ 📂store
 ┃ ┃ ┗ 📂myInfo
 ┃ ┃ ┃ ┣ 📜myInfo.ts
 ┃ ┃ ┃ ┗ 📜myInfo.types.ts
 ┃ ┣ 📜_document.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜logo.png
 ┃ ┣ 📜manifest.ts
 ┃ ┣ 📜not-found.tsx
 ┃ ┣ 📜page.module.css
 ┃ ┣ 📜page.tsx
 ┃ ┗ 📜toast.css
 ┣ 📂constants
 ┃ ┣ 📜ConceptEnum.ts
 ┃ ┣ 📜CouponEnum.ts
 ┃ ┣ 📜MaterialEnum.ts
 ┃ ┣ 📜NotiEnum.ts
 ┃ ┣ 📜OrderStatusEnum.ts
 ┃ ┣ 📜PageResponseType.ts
 ┃ ┣ 📜PointEnum.ts
 ┃ ┣ 📜ReviewEnum.ts
 ┃ ┣ 📜SnackTypeEnum.ts
 ┃ ┗ 📜SortEnum.ts
 ┣ 📂types
 ┃ ┗ 📜images.d.ts
 ┗ 📂utils
 ┃ ┣ 📜usePushNotification.tsx
 ┃ ┗ 📜useThrottle.ts
```
---

<br>

