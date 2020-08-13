import styled, { css } from "styled-components"

const containerCommonStyle = css`
  display: inline-block;

  &:link,
  &:visited,
  &:active {
    color: inherit;
  }

  &:hover {
    cursor: pointer;
    color: #34495e;
  }
`

export const Container = styled.div`
  ${containerCommonStyle}
`

export const LinkContainer = styled.a`
  color: inherit;
  ${containerCommonStyle}
`
