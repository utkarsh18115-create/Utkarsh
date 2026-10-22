import { site } from '@/content';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SelectedWork } from '@/components/selected-work';
import { Experience } from '@/components/experience';
import { Research } from '@/components/research';
import { Education } from '@/components/education';
import { Achievements } from '@/components/achievements';
import { Skills } from '@/components/skills';
import { Now } from '@/components/now';
import { Inspiration } from '@/components/inspiration';
import { Footer } from '@/components/footer';
import { MotionProvider } from '@/components/motion-provider';

export default function Home() {
  return <MotionProvider><a className="skip-link" href="#main">{site.ui.skip}</a><Header /><main id="main" tabIndex={-1}><Hero /><SelectedWork /><Experience /><Research /><Education /><Achievements /><Skills /><Now /><Inspiration /></main><Footer /></MotionProvider>;
}
