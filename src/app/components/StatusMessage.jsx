'use client';

// DONE DONE DONE
export default function StatusMessage({loading, error, isEmpty}) {
  if (loading) {
    return (
      <div className="loading-message">
        LOADING, LOADING...
      </div>
    );
  }
  if (error) {
    return (
      <div className="error-message">
        {error}
      </div>
    );
  }
  if (isEmpty) {
    return (
      <div className="empty-message">
        No products match your filters.
      </div>
    );
  }
  return null;
}