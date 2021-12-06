import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";
import "twin.macro";

const between = (x, min, max) => {
  return (x - min) * (x - max) <= 0;
};
const GridActivity = ({ shoutouts }) => {
  const aYearAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  ).toLocaleDateString("en-CA");
  const today = new Date(Date.now()).toLocaleDateString("en-CA");
  return (
    <>
      <div tw="px-10 pb-12">
        <CalendarHeatmap
          startDate={aYearAgo}
          endDate={today}
          values={shoutouts}
          until={new Date().toLocaleDateString("en-CA")}
          tooltipDataAttrs={(value) => {
            return {
              "data-for": "tooltip",
              "data-tip": `${value.count}@${value.date}` || "",
            };
          }}
          showMonthLabel={true}
          gutterSize={3}
          onClick={(value) => {
            // setVisible(true);
          }}
          classForValue={(value) => {
            if (!value) {
              return "empty-ceil";
            } else if (between(value.count, 1, 2)) {
              return `color-scale-${1}`;
            } else if (between(value.count, 3, 4)) {
              return `color-scale-${2}`;
            } else if (between(value.count, 5, 6)) {
              return `color-scale-${3}`;
            } else return `color-scale-${4}`;
          }}
        />
        <ReactTooltip
          id="tooltip"
          getContent={(value) => {
            if (value === null) {
              return;
            }
            const data = value.split("@");
            const [shoutouts, date] = data;

            if (shoutouts === "null") {
              return null;
            }
            return `${shoutouts} ${
              parseInt(shoutouts) > 1 ? "shoutouts" : "shoutout"
            }  on ${new Date(date).toDateString()}`;
          }}
        />
      </div>
    </>
  );
};

export default GridActivity;
