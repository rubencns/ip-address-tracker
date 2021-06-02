import Skeleton from 'react-loading-skeleton';
import './details-style.scss';

const Details = ({ geoDetails }) => {
  const { ip, isp, city, region, postalCode, timezone } = geoDetails;
  const location =
    city && region && postalCode
      ? `${city}, ${region} ${postalCode}`
      : undefined;

  const detailsData = [
    { label: 'ip address', value: ip },
    {
      label: 'location',
      value: location,
    },
    { label: 'timezone', value: timezone },
    { label: 'isp', value: isp },
  ];

  return (
    <div className="details-wrap">
      <div className="details">
        {detailsData.map(({ label, value }, index) => (
          <div className="details-item" key={`details-item__${index}`}>
            <div className="details-item-label">{<span>{label}</span>}</div>
            <div className="details-item-value">
              {<p>{value || <Skeleton width={100} />}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
