import { MouseEvent, PropsWithChildren, useEffect, useState } from 'react';
import { BackImage, Container, Wrapper, FrontImage, Layout } from './style';

export interface TurnableComponentProps {
  frontImageUrl: string;
  backImageUrl: string;
  isShown?: boolean;
  width?: number;
  height?: number;
  isClickable?: boolean;
}

const TurnableComponent = ({
  frontImageUrl,
  backImageUrl,
  isShown = true,
  width = 270,
  height = 150,
  isClickable = false,
  children,
}: TurnableComponentProps & PropsWithChildren) => {
  const [isTurned, setIsTurned] = useState(false);

  useEffect(() => {
    if (!isClickable) {
      if (isShown) {
        setTimeout(() => {
          setIsTurned(true);
        }, 100);
      }

      if (!isShown) {
        setIsTurned(false);
      }
    }
  }, [isShown]);

  const turn = (e: MouseEvent<HTMLDivElement>) => {
    if (isClickable) setIsTurned(!isTurned);
  };

  return (
    <Container
      $width={width}
      $height={height}
      $isClickable={isClickable}
      onClick={turn}
    >
      <Wrapper $isTurned={isTurned}>
        <FrontImage src={frontImageUrl} />
        <BackImage src={backImageUrl} />
        {children}
      </Wrapper>
    </Container>
  );
};

export default TurnableComponent;
