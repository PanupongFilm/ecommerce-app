
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>

      <div>

        <header>

          <nav>
            <Navbar />
          </nav>

          <div className='h-screen' style={{
            backgroundImage: "url('/Fruit.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          >

          </div>

        </header>

        <main>


        </main>


      </div>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Home