import styled from 'styled-components';

export const ReviewStyled = styled.div`

  .review-list {
    border-bottom: 1px solid lightgray;
    margin-bottom: 30px;
    .top {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      .delete {
        cursor: pointer;
      }
    }
    .rating {
      display: flex;
      .date {
        margin-left: 10px;
      }
    }
    .bottom {
      margin-bottom: 10px;
    }
  }
`;
