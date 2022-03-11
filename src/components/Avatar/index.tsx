import React from 'react';
import * as S from './styles'


type AvatarProps = {
  imgUrl?: string;
  nome: string;
}

const Avatar = ({imgUrl, nome}: AvatarProps) => {

  return (
    <S.AvatarWrapper>
      <S.ImageWrapper src={imgUrl} alt={nome} />
      <S.TextWrapper>{nome}</S.TextWrapper>
    </S.AvatarWrapper>
  )
}

export default React.memo(Avatar);