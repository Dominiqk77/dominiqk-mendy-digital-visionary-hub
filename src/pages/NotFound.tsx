
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-gray-900 to-black py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-gradient text-7xl font-bold mb-6">404</h1>
            <div className="h-1 w-24 bg-gradient-primary mx-auto mb-8"></div>
            
            <p className="text-2xl font-bold text-white mb-4">Page Non Trouvée</p>
            <p className="text-gray-300 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              <Link to="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
