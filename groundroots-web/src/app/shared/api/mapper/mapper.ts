export interface Mapper<TModel, TEntity> {
    toModel(entity: TEntity): TModel;
    toEntity(model: TModel): TEntity;
}