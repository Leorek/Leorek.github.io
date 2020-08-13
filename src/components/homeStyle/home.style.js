import styled from "styled-components"

export const NameContainer = styled.div`
  display: flex;
  font-size: 36px;
  margin-top: 16px;

  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
