# Learner workspace

Project briefs and acceptance criteria are in `docs/projects/index.md`.
All implementation bodies are deliberately unfinished. The mentor supplies
hints and review; the learner supplies code and evidence.

Run the initial exercise contracts independently:

```sh
python3 -m unittest discover -s projects/01-python-bridge -p 'test_*.py'
python3 -m unittest discover -s projects/03-enterprise-rag -p 'test_*.py'
```

These tests are expected to fail until you implement the corresponding stubs.
They cover selected contracts, not every project acceptance criterion. Add tests
for the remaining criteria yourself. `npm test` checks publishing infrastructure
and curriculum consistency; it does not certify learner mastery.

Use `.learning/` for private answers and review notes. Public project code must
contain only synthetic or properly authorized, publishable data.
