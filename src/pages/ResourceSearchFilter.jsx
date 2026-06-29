.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  margin-top: -34px;
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* =========================
   FILTER SECTION WRAPPER
========================= */
.filterSection {
  width: 100%;
}

/* =========================
   CONTAINER
========================= */
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* =========================
   SEARCH BOX
========================= */
.searchBox {
  position: relative;
  display: flex;
  align-items: center;

  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;

  padding: 12px 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
}

/* input inside search */
.searchBox input {
  width: 100%;
  border: none;
  outline: none;

  font-size: 14px;
  font-family: Arial, sans-serif;
  color: #111827;

  padding-left: 10px;
  background: transparent;
}

.searchBox:focus-within {
  border-color: #2f74f0;
  box-shadow: 0 0 0 3px rgba(47, 116, 240, 0.15);
}

/* icon */
.searchBox svg {
  color: #9ca3af;
  flex-shrink: 0;
}

/* =========================
   TABS
========================= */
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* tab button */
.tab {
  font-size: 13px;
  font-weight: 600;

  padding: 8px 16px;
  border-radius: 999px;

  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #4b5563;

  cursor: pointer;
  transition: all 0.2s ease;
}

.tab:hover {
  background: #f3f4f6;
  transform: translateY(-1px);
}

/* active tab */
.active {
  background: #2f74f0;
  color: #ffffff;
  border-color: #2f74f0;
}

/* =========================
   FEATURED SECTION WRAPPER
========================= */
.featuredGuide {
  margin-top: 10px;
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 768px) {
  .wrap {
    padding: 0 20px;
    margin-top: -20px;
  }

  .searchBox {
    padding: 10px 12px;
  }

  .tab {
    font-size: 12px;
    padding: 7px 14px;
  }
}

@media (max-width: 480px) {
  .tabs {
    gap: 8px;
  }

  .searchBox input {
    font-size: 13px;
  }
}