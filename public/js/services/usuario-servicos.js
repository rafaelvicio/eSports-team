const MSG = {
  dontUpdate: ( usuario ) => ({
    mensagem: 'Não foi possível atualizar o usuario ' + usuario.login
  }),
  dontInsert: ( usuario ) => ( {
    mensagem: 'Não foi possível incluir o usuario ' + usuario.login
  } ),
  update: ( usuario ) => ( {
    mensagem: 'Usuario ' + usuario.login + ' atualizada com sucesso',
    inclusao: false
  } ),
  insert: ( usuario ) => ( {
    mensagem: 'Usuario ' + usuario.login + ' incluída com sucesso',
    inclusao: true
  } )
}

const rejectWithMessage = ( mensagem, usuario ) => ( erro ) => {
  console.log( 'ERRROOOO: ', erro )
  return reject( MSG[ mensagem ]( usuario ) )
}

angular.module( 'usuarioServico', [ 'ngResource' ] )
  .factory( 'recursoUsuario', function ($resource ) {
    return $resource( '/api/usuarios/:usuarioId', null, {
      'update': {
        method: 'PUT'
      }
    } )
  } )
  .factory( 'cadastroDeUsuarios', function ( recursoUsuario, $q ) {

    const cadastrar = ( usuario ) => $q( ( resolve, reject ) => 
      ( usuario._id )
        ? recursoUsuario.update( { usuarioId: usuario._id }, usuario, () =>
            resolve( MSG[ 'update' ]( usuario ) )
          , rejectWithMessage( 'dontUpdate', usuario ) )
        : recursoUsuario.save( usuario, () => 
            resolve( MSG[ 'insert' ]( usuario ) )
          , rejectWithMessage( 'dontInsert', usuario ) )
    )

    return { cadastrar }
} )