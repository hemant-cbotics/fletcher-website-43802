import { Button, ButtonGroup } from "react-bootstrap";
import { useAppContext } from "../contexts/app-context";
import { openLinkInNewWindow } from "../utils/common/common";

const MobileAppCtas = () => {
  const { homeData } = useAppContext();

  return (
    <ButtonGroup className="ctas" aria-label="Get the Fletcher mobile app">
      <Button
        className="apple"
        title="Get Fletcher for iOS"
        onClick={() => {
          openLinkInNewWindow(`${homeData?.data?.ios_app_link}`);
        }}
      ></Button>
      <Button
        className="google"
        title="Get Fletcher for Android"
        onClick={() => {
          openLinkInNewWindow(`${homeData?.data?.android_app_link}`);
        }}
      ></Button>
    </ButtonGroup>
  );
};
export default MobileAppCtas;
