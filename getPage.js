language: node_js
node_js:
    - node
cache:
    directories:
        - node_modules
script:
    - npm install -g serverless
    - sls deploy