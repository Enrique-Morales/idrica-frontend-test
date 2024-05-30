import "./App.scss";
import PostsViewer from "./components/organisms/PostsViewer/PostsViewer";
import Text from "./components/atoms/Text/Text";
import { TextVariants } from "./utils/constants";

const App = () => {
  return (
    <div className="app">
      <div className="app-title">
        <Text variant={TextVariants.H3}>Idrica Frontend Test - Cards</Text>
      </div>
      <PostsViewer />
    </div>
  );
};

export default App;
