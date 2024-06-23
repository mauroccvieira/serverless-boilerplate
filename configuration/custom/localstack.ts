export const localstack = {
  stages: ["local"],
  autostart: true,
  host: "http://localhost",
  docker: {
    compose_file: "./localstack/docker-compose.yml"
  }
} satisfies LocalstackOptions;

export interface LocalstackOptions {
  stages?: string[];
  /**
   * LocalStack host to connect to
   */
  host?: string;
  /**
   * LocalStack port to connect to
   */
  edgePort?: number;

  /**
   * Start LocalStack in Docker on Serverless deploy
   *
   * default: false
   */
  autostart?: boolean;

  docker?: {
    /** Enable this flag to run "docker ..." commands as sudo */
    sudo?: boolean;
    /** optional to use docker compose instead of docker or localstack cli */
    compose_file?: string;
  };
}
