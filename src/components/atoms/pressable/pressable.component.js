import React from "react"
import { Container, LinkContainer } from "./pressable.style"

export const PressableComponent = props => {
  const { onPress, isLink, children, ...otherProps } = props

  const ContainerComponent = isLink ? LinkContainer : Container

  return (
    <ContainerComponent onClick={onPress} {...otherProps}>
      {children}
    </ContainerComponent>
  )
}
