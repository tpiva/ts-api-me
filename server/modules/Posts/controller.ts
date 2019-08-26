import { Request, Response} from 'express';
import handlers from '../../api/responses/handlers';
import * as _ from 'lodash';
import Post from './service';

class PostController {

    getAll(req: Request, res: Response) {
        Post
        .getAll()
        .then(_.partial(handlers.onSuccess, res))
        .catch(_.partial(handlers.onError, res, 'Erro ao buscar todos os posts.'));
    }

    createPost(req: Request, res: Response) {
        Post
        .create(req.body)
        .then(_.partial(handlers.onSuccess, res))
        .catch(_.partial(handlers.dbErrorHandler, res, 'Erro no banco.'))
        .catch(_.partial(handlers.onError, res, 'Erro ao inserir um post.'));
    }

    getById(req: Request, res: Response) {
        const PostId = parseInt(req.params.id);
        Post
        .getById(PostId)
        .then(_.partial(handlers.onSuccess, res))
        .catch(_.partial(handlers.onError, res, 'Erro ao buscar post.'));
    }

    updatePost(req: Request, res: Response) {
        const PostId = parseInt(req.params.id);
        const props = req.body;
        Post
        .update(PostId, props)
        .then(_.partial(handlers.onSuccess, res))
        .catch(_.partial(handlers.onError, res, 'Erro ao atualizar post.'));
    }

    deletePost(req: Request, res: Response) {
        const PostId = parseInt(req.params.id);
        Post
        .delete(PostId)
        .then(_.partial(handlers.onSuccess, res))
        .catch(_.partial(handlers.onError, res, 'Erro ao excluir post.'));
    }
}

export default new PostController();