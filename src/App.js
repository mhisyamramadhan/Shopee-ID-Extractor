import Header from './Header/header';
import Content from './Content/content';
import Footer from './Footer/footer';

function App() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className='h-[100px]'>
          <Header />
        </div>
        
        <div className='flex-auto bg-[#f5f5f5]'>
          <Content />
        </div>

        <div className='h-[80px]'>
        <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
