import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import VisibilityContext from "@/contexts/Visibility/VisibilityContext.jsx";
import { Icon } from "@iconify/react";
import { useContext } from "react";

/**
 * A toggle to switch between different views in the app.
 *
 * @return {object} A JSX element representing the toggle.
 */
const ViewToggle = () => {
  const { activeView, setActiveView } = useContext(VisibilityContext);

  // handle view toggle
  const handleClick = (value) => {
    setActiveView((prev) => {
      /*
       * value should be "square" or "progress" never an empty string
       * it gives an empty string if the value is being repeated
       * it is mapped to "progress" if the previous value was "square" and vice versa
       * */
      let newView;
      if (value === "") {
        if (prev === "square") {
          newView = "progress";
        } else {
          newView = "square";
        }
      } else {
        newView = value;
      }

      localStorage.setItem("storedView", newView);
      return newView;
    });
  };

  return (
    <ToggleGroup
      type="single"
      size={"sm"}
      value={activeView}
      onValueChange={handleClick}
    >
      <ToggleGroupItem value="square">
        <Icon icon="teenyicons:grid-layout-outline" />
      </ToggleGroupItem>
      <ToggleGroupItem value="progress">
        <Icon icon="pajamas:progress" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default ViewToggle;
