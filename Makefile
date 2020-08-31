cloud-build:
	gcloud builds submit --project "{project-id}" --config=./cloud-build.yml
cloud-run:
	gcloud beta run deploy lets-todo-node --region us-central1 --allow-unauthenticated --project "{project-id}" --image gcr.io/{project-id}/lets-todo-node
local-serve:
	docker-compose up
test:
	docker-compose run --rm --service-ports app /bin/bash -c "yarn test"
