import { EmptyState, Loader } from "../ui/PureReusableUIComponents";

const ApiState = ({ isLoading, isError, error, children }) => {
  if (isLoading) {
    return <Loader fullScreen label="Loading..." />;
  }

  if (isError) {
    return (
      <EmptyState
        title="Something went wrong"
        description={
          error?.response?.data?.message ||
          error?.message ||
          "Please try again."
        }
      />
    );
  }

  return children;
};

export default ApiState;
