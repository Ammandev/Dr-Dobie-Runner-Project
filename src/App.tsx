import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect, useState } from "react";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/Webgl.loader.js",
    dataUrl: "/build/Webgl.data",
    frameworkUrl: "/build/Webgl.framework.js",
    codeUrl: "/build/Webgl.wasm",
  });

  const MAX_ASPECT_RATIO = 1.5; // Maximum width to height ratio (width = 1.5 * height)

  const calculateConstrainedDimensions = (width: number, height: number) => {
    const maxWidth = height * MAX_ASPECT_RATIO;
    
    // If width exceeds the maximum allowed width based on aspect ratio, constrain it
    if (width > maxWidth) {
      return {
        width: maxWidth,
        height: height,
      };
    }
    
    return {
      width: width,
      height: height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(() => 
    calculateConstrainedDimensions(window.innerWidth, window.innerHeight)
  );

  useEffect(() => {
    function handleResize() {
      const constrained = calculateConstrainedDimensions(
        window.innerWidth,
        window.innerHeight
      );
      setWindowDimensions(constrained);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Unity
        style={{
          width: `${windowDimensions.width}px`,
          height: `${windowDimensions.height}px`,
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export default App;
