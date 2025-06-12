import Lottie from "lottie-react";
import { LottieComponentProps, LottieRefCurrentProps } from "lottie-react";
import { Suspense, useEffect, useRef } from "react";

type LottieAnimationProps = {
  srcUrl: LottieComponentProps["animationData"];
  width: number;
  height: number;
  loop?: boolean;
  autoplay?: boolean;
};

export const LottieAnimation = ({ srcUrl, width, height, loop, autoplay }: LottieAnimationProps) => {
  const playerRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (autoplay && playerRef.current) {
      playerRef.current.play();
    }
  }, [autoplay]);

  const handleMouseEnter = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };
  const handleMouseLeave = () => {
    if (playerRef.current) {
      playerRef.current.pause();
    }
  };

  const suspense = <div className="w-full h-full flex items-center justify-center">loading... </div>;

  return (
    <Suspense fallback={suspense}>
      <Lottie
        animationData={srcUrl}
        width={width}
        height={height}
        lottieRef={playerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        loop={loop}
        autoplay={autoplay}
      />
    </Suspense>
  );
};
