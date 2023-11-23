import Footer from '../footer/Footer';
import Header from '../header/Header';
type LayoutProps = {
  children: React.ReactNode;
};

const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default LayoutComponent;
