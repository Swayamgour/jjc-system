// src/components/Breadcrumb.jsx
import React from 'react';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const Breadcrumb = ({
  backgroundImage = '/images/breadcrumb-bg.jpg',
  breadcrumbItems = [],
  pageHeading = 'Contact Us',
  customClass = '',
  containerStyle = {},
  headingStyle = {},
  paddingVertical = '6rem',
  paddingHorizontal = '3rem',
  onBreadcrumbClick = (item, index) => {},
  onHeadingClick = () => {}
}) => {
  // Default items if none provided
  const defaultItems = [
    { label: 'Home', url: '/', icon: 'FaHome' },
    { label: 'Contact Us', isActive: true }
  ];

  const items = breadcrumbItems.length > 0 ? breadcrumbItems : defaultItems;

  // Get the last item as active page
  const lastItem = items[items.length - 1];
  const heading = lastItem?.isActive ? lastItem.label : pageHeading;

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'FaHome':
        return <FaHome style={{ fontSize: '0.9rem', opacity: 0.8 }} />;
      case 'FaChevronRight':
        return <FaChevronRight style={{ fontSize: '0.6rem' }} />;
      default:
        return null;
    }
  };

  return (
    <div className={`breadcrumb-modern ${customClass}`} style={containerStyle}>
      <div 
        className="breadcrumb-bg" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div 
        className="breadcrumb-content" 
        style={{ 
          padding: `${paddingVertical} ${paddingHorizontal}`,
        }}
      >
        <div className="left-section">
          <div className="breadcrumb-trail">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <span className="separator">
                    {renderIcon('FaChevronRight')}
                  </span>
                )}
                {item.isActive ? (
                  <span className="current">{item.label}</span>
                ) : (
                  <a 
                    href={item.url || '#'} 
                    className="breadcrumb-link"
                    onClick={(e) => {
                      e.preventDefault();
                      onBreadcrumbClick(item, index);
                    }}
                  >
                    {item.icon && renderIcon(item.icon)}
                    {item.label}
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <h1 
            className="page-heading" 
            style={headingStyle}
            onClick={onHeadingClick}
          >
            {heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;