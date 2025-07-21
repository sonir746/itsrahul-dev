import "../components/project/Projects.css";
import ProjDetails from "../components/project/ProjDetails";
import ProjectData from "../components/common/ProjectData";
const Projects = () => {
  return (
    <div className="main">
      <div className="projArea">
        {Object.values(ProjectData).map((obj, index) => {
          {/* console.log(obj.name); */}
          return (
            <ProjDetails
              key={index}
              image={obj.image}
              name={obj.name}
              Details={obj.details}
              git={obj.GitHub}
              link={obj.livelink}
            class={obj.livelink!=="" ? ["",""] : ["full","none"]}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
