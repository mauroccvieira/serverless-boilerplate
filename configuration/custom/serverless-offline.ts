export const serverlessOffline = {
  httpPort: 8000,
  lambdaPort: 9000,
  host: "127.0.0.1"
} satisfies ServerlessOfflineOptions;

export interface ServerlessOfflineOptions {
  /**
   * Used as default Access-Control-Allow-Headers header value for responses. Delimit multiple values with commas.
   *
   * Default: 'accept,content-type,x-api-key'
   */
  corsAllowHeaders?: string;

  /**
   * Used as default Access-Control-Allow-Origin header value for responses. Delimit multiple values with commas.
   *
   * Default: '*'
   */
  corsAllowOrigin?: string;

  /**
   * When provided, the default Access-Control-Allow-Credentials header value will be passed as 'false'.
   *
   * Default: true
   */
  corsDisallowCredentials?: boolean;

  /**
   * Used as additional Access-Control-Exposed-Headers header value for responses. Delimit multiple values with commas.
   *
   * Default: 'WWW-Authenticate,Server-Authorization'
   */
  corsExposedHeaders?: string;

  /**
   * Used to disable cookie-validation on hapi.js-server.
   *
   * Default: false
   */
  disableCookieValidation?: boolean;

  /**
   * The host name of Docker.
   *
   * Default: localhost
   */
  dockerHost?: string;

  /**
   * Defines service path which is used by SLS running inside Docker container.
   */
  dockerHostServicePath?: string;

  /**
   * When running Docker Lambda inside another Docker container, you may need to override network that Docker Lambda connects to in order to communicate with other containers.
   */
  dockerNetwork?: string;

  /**
   * Marks if the docker code layer should be read only.
   *
   * Default: true
   */
  dockerReadOnly?: boolean;

  /**
   * Enforce secure cookies
   */
  enforceSecureCookies?: boolean;

  /**
   * -o Host name to listen on.
   *
   * Default: localhost
   */
  host?: string;

  /**
   * Http port to listen on.
   *
   * Default: 3000
   */
  httpPort?: number;

  /**
   * -H To enable HTTPS, specify directory (relative to your cwd, typically your project dir) for both cert.pem and key.pem files.
   */
  httpsProtocol?: string;

  /**
   * When using HttpApi with a JWT authorizer, don't check the signature of the JWT token.
   *
   * Default: false
   */
  ignoreJWTSignature?: boolean;

  /**Lambda http port to listen on.
   *
   * Default: 3002
   * */
  lambdaPort?: number;

  /**
   * The directory layers should be stored in.
   *
   * Default: ${codeDir}/.serverless-offline/layers'
   */
  layersDir?: string;

  /**
   * Copy local environment variables.
   *
   * Default: false
   */
  localEnvironment?: string;

  /**
   * Turns off all authorizers.
   *
   * Default: false
   */
  noAuth?: boolean;

  /**
   * Don't prepend http routes with the stage.
   *
   * Default: false
   */
  noPrependStageInUrl?: boolean;

  /**
   * -t Disables the timeout feature.
   *
   * Default: false
   */
  noTimeout?: boolean;

  /**
   * -p Adds a prefix to every path, to send your requests to http://localhost:3000/[prefix]/[your_path] instead.
   *
   * Default: ''
   */
  prefix?: string;

  /**
   * Reloads handler with each request.
   *
   * Default: false
   */
  reloadHandler?: boolean;

  /**
   * Turns on loading of your HTTP proxy settings from serverless.yml.
   *
   * Default: false
   */
  resourceRoutes?: boolean;

  /**
   * Number of seconds until an idle function is eligible for termination.
   */
  terminateIdleLambdaTime?: number;

  /** Run handlers in a docker container. */
  useDocker?: boolean;

  /**
   * Run handlers in the same process as 'serverless-offline'.
   *
   * Default: false
   * */
  useInProcess?: boolean;

  /**
   * Set WebSocket hard timeout in seconds to reproduce AWS limits (https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html#apigateway-execution-service-websocket-limits-table).
   *
   * Default: 7200 (2 hours)
   */
  webSocketHardTimeout?: number;

  /**
   * Set WebSocket idle timeout in seconds to reproduce AWS limits (https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html#apigateway-execution-service-websocket-limits-table).
   *
   * Default: 600 (10 minutes)
   */
  webSocketIdleTimeout?: number;

  /**
   * WebSocket port to listen on.
   *
   * Default: 3001
   */
  websocketPort?: number;
}
