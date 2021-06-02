import { useEffect, useState } from 'react';
import { fetchGeoLocation } from '../services/ip-api';

export default function useGeoLocation(query) {
  const [geoDetails, setGeoDetails] = useState({
    data: {},
    loading: false,
    error: '',
  });

  function getGeoLocation(query) {
    setGeoDetails({ ...geoDetails, loading: true });
    fetchGeoLocation(query)
      .then((data) =>
        setGeoDetails({
          ...geoDetails,
          data: {
            ip: data.query,
            isp: data.isp,
            city: data.city,
            region: data.region,
            postalCode: data.zip,
            timezone: data.timezone,
            location: [data.lat, data.lon],
          },
          loading: false,
          error: '',
        })
      )
      .catch((err) => {
        setGeoDetails({ ...geoDetails, loading: false, error: err.message });
        setTimeout(
          () => setGeoDetails({ ...geoDetails, loading: false, error: '' }),
          5000
        );
      });
  }

  useEffect(() => {
    getGeoLocation(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return {
    data: geoDetails.data,
    loading: geoDetails.loading,
    error: geoDetails.error,
  };
}
