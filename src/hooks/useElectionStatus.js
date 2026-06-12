import { useEffect, useState } from 'react';

export default function useElectionStatus(electionData) {
    const hasMockStatus = electionData.mockStatus !== undefined;
    const [status, setStatus] = useState(hasMockStatus ? electionData.mockStatus : null);
    const [loading, setLoading] = useState(!hasMockStatus);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (hasMockStatus) return;
        let cancelled = false;
        const fetchStatus = async () => {
            try {
                const res = await fetch(electionData.status_link, { cache: 'no-store' });
                if (!res.ok) throw new Error('Network error');
                const data = await res.json();
                if (!cancelled) setStatus(data.status);
            } catch (e) {
                if (!cancelled) setError(e.message);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        fetchStatus();
        return () => { cancelled = true; };
    }, [electionData.status_link, hasMockStatus]);

    return { status, loading, error };
}
