export interface UsecaseInterface<REQ, RES> {
  execute(request: REQ): Promise<RES>;
}
