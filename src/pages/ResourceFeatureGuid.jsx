.card {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.4fr);
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.visualPanel {
  background: linear-gradient(135deg, var(--navy-900), #14306f);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  min-width: 0;
}

.content {
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  min-width: 0;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--blue-600);
  background: var(--blue-100);
  padding: 5px 12px;
  border-radius: 999px;
  width: fit-content;
}

.title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--gray-900);
  margin: 4px 0 0;
  line-height: 1.3;
}

.description {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--gray-500);
  margin: 0;
  line-height: 1.55;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--blue-600);
  text-decoration: none;
  margin-top: 6px;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}