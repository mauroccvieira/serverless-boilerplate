declare namespace NodeJS {
  export interface ProcessEnv {
    /** The handler location configured on the function. */
    _HANDLER: string;
    /** The X-Ray tracing header. This environment variable is not defined for custom runtimes (for example, runtimes that use the provided or provided.al2 identifiers). You can set _X_AMZN_TRACE_ID for custom runtimes using the Lambda-Runtime-Trace-Id response header from the Next invocation. */
    _X_AMZN_TRACE_ID: string;
    /** The AWS Region where the Lambda function is executed. */
    AWS_REGION: string;
    /** The runtime identifier, prefixed by AWS_Lambda_ (for example, AWS_Lambda_java8). This environment variable is not defined for custom runtimes (for example, runtimes that use the provided or provided.al2 identifiers). */
    AWS_EXECUTION_ENV: string;
    /** The name of the function.∏ */
    AWS_LAMBDA_FUNCTION_NAME: string;
    /** The amount of memory available to the function in MB. */
    AWS_LAMBDA_FUNCTION_MEMORY_SIZE: string;
    /** The version of the function being executed. */
    AWS_LAMBDA_FUNCTION_VERSION: string;
    /** The initialization type of the function, which is on-demand, provisioned-concurrency, or snap-start. For information, see Configuring provisioned concurrency or Improving startup performance with Lambda SnapStart. */
    AWS_LAMBDA_INITIALIZATION_TYPE: string;
    /** The name of the Amazon CloudWatch Logs group and stream for the function. */
    AWS_LAMBDA_LOG_GROUP_NAME: string;
    // -The name of the Amazon CloudWatch Logs group and stream for the function.
    AWS_LAMBDA_LOG_STREAM_NAME: string;
    /** The access keys obtained from the function's execution role. */
    AWS_ACCESS_KEY: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    AWS_SESSION_TOKEN: string;

    /** (Custom runtime) The host and port of the runtime API. */
    AWS_LAMBDA_RUNTIME_API: string;

    /** The path to your Lambda function code. */
    LAMBDA_TASK_ROOT: string;

    /** The path to runtime libraries. */
    LAMBDA_RUNTIME_DIR: string;
  }
}
