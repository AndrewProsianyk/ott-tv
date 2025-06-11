// import styles from "./TrailerSection.module.scss";

import Container from "../container/Container";
import VideoContainer from "../videoContainer/VideoContainer";

type TrailerSectionProps = {
  videoId: string;
};

export default function TrailerSection({ videoId }: TrailerSectionProps) {
  return (
    <section id="trailer-section" className="py-[54px]">
      <Container>
        <VideoContainer videoId={videoId} />
      </Container>
    </section>
  );
}
