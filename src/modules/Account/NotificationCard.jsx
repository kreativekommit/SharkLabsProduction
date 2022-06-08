const NotificationCard = ({ image, Icon, iconClassName, mainText, subText, buttonText, timestamp, buttonType }) => {
  return (
    <div className="notification-card border-bottom d-flex align-items-center w-100 flex-wrap">
      <div className="notification-icon">
        {image && <img className="notification-iconImage" src={image} alt="TOWN icon" />}
        {Icon && <Icon className={iconClassName} />}
      </div>
      <div className="notification-content">
        <p className="mb-1">{mainText}</p>
        <p className="mb-0 text-uppercase">{subText}</p>
      </div>
      <div className="notification-info text-center">
        {buttonType === "FULFILED" ? (
          <p className="mb-1 text-white">{buttonText}</p>
        ) : (
          <p className="mb-1 bg-dark text-white">{buttonText}</p>
        )}
        <p className="mb-0">{timestamp}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
