import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div
      style={{ height: "300px" }}
      className="w-100 flex items-center justify-center"
    >
      <HashLoader size={50} />

      {/* <Spinner animation="border" variant="primary" /> */}
    </div>
  );
};

export default Loading;
