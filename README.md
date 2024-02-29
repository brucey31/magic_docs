# Magic-Docs
This repo is a POC for a few ways to auto document both application & infra based changes within the repo.

This repo aims to render documentation on each commit for the following types of documentation:
- C1-4 diagrams for the context and infrastructure of the repo
- AWS systems architecture diagrams
- Pydantic modelling & ERD diagrams
- Frontend React component mapping
- FastAPI web documentation
- Automated terraform documentation diagram

The idea here is that where possible we create highly visual dynamically updatable diagrams and documentation from within a repo that can then potentially be i-framed into notion for shareability? (I don't know but want to know if this is possible)

## TODO
1. Work out how to use [terravision](https://github.com/patrickchugh/terravision) to automatically create documentation from `/docs/src/arch.tf`