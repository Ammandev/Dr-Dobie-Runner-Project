import "./App.css";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/Webgl.loader.js",
    dataUrl: "/build/Webgl.data",
    frameworkUrl: "/build/Webgl.framework.js",
    codeUrl: "/build/Webgl.wasm",
  });

  return (
    <div className="App">
      <Unity
        style={{
          width: "100%",
          height: "100%",
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export default App;
