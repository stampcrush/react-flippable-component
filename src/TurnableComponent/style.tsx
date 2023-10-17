import { css, styled } from 'styled-components';

interface StyledProps {
  $width: number;
  $height: number;
  $isClickable: boolean;
}

export const Container = styled.div<StyledProps>`
  display: flex;
  position: relative;
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  perspective: 1100px;
  transition: all 0.4s;
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'auto')};
`;

export const Wrapper = styled.div<{ $isTurned: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: all 0.4s;

  ${({ $isTurned }) =>
    $isTurned &&
    css`
      transform: rotateY(180deg);
    `}
`;

export const CouponImage = styled.img`
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  object-fit: cover;
  backface-visibility: hidden;
  box-shadow: 0px -2px 15px -2px #888;

  z-index: 2;
`;

export const FrontImage = styled(CouponImage)`
  z-index: 10;
`;

export const BackImage = styled(CouponImage)`
  transform: rotateY(180deg);
  z-index: 0;
`;
