export interface Category {
  id: number;
  categoryName: string;
  pId: number | null;
}

export interface SpaceType {
  id: number;
  spaceName: string;
  spaceLocation: string;
  description: string;
  spacePrice: number;
  discount: number;
  amenities: string[]; // 편의시설 목록 (문자열 배열)
  cleanTime: number;
  spaceStatus: string; // 공간의 상태 ('AVAILABLE' 또는 'UNAVAILABLE')
  isOpen: boolean; // 공간이 열려 있는지 여부
  guidelines: string[]; // 주의사항 (문자열 배열)
  categoryId: number;
  minGuests: number; // 최소 인원
  maxGuests: number; // 최대 인원
  spaceImg: { src: string }[]; // 공간 이미지 배열
  businessStartTime: number;
  businessEndTime: number;
  spaceAdminName: string;
  spaceAdminPhoneNumber: string;
  Images?: {
    imageUrl: string;
  }[];
  Reviews?: {
    User?: {
      userName: string;
    };
    reviewComment: string;
    reviewRating: number;
    createdAt: string;
    reviewStatus: string;
    updatedAt:string
    id:number
  }[];
}

export interface Image {
  id: number;
  imageUrl: string;
  spaceId: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  userName: string;
  email: string;
  accountStatus: string;
  review: [Review];
}

export interface Review {
  id: number;
  reviewComment: string;
  reviewRating: number | null;
  reviewStatus: string;
  spaceId: number;
  createdAt: string;
  User: User;
}

export interface Booking {
  id: number;
  startDate: string;
  startTime: number;
  endTime: number;
  bookingStatus: string;
  // 다른 필요한 Booking 속성 추가
}
