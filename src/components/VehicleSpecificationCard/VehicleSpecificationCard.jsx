const VehicleSpecificationCard = ({ icon, label, value }) => {
  return (
    <>
      {icon} {label}: {value}
    </>
  );
};

export default VehicleSpecificationCard;
