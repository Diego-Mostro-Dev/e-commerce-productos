//TYPES

const LISTAME_PRODUCTOS = 'LISTAME_PRODUCTOS'
const AGREGAR_CARRITO = 'AGREGAR_CARRITO'
const ELIMINAR_CARRITO = 'ELIMINAR_CARRITO'
const VACIAR_CARRITO = 'VACIAR_CARRITO'

export default function Reducer(state, action) {
    const { type, payload } = action

    switch (type) {
        case LISTAME_PRODUCTOS: // Asegúrate de que LISTAME_PRODUCTOS sea un string o esté definido
            return {
                ...state,
                productos: payload
            }
        case AGREGAR_CARRITO:
            // Encontrar el producto en la lista de productos
            const productoAAgregar = state.productos.find(ite => ite.id === payload.id);

            // Verificar si el producto ya está en el carrito
            const yaEnCarrito = state.carrito.find(item => item.id === payload.id);

            if (productoAAgregar) {
                if (yaEnCarrito) {
                    // Si el producto ya está en el carrito, incrementamos la cantidad
                    return {
                        ...state,
                        carrito: state.carrito.map(item =>
                            item.id === payload.id
                                ? { ...item, cantidad: item.cantidad + 1 } // Incrementamos la cantidad
                                : item
                        )
                    };
                } else {
                    // Si no está en el carrito, lo agregamos con cantidad 1
                    return {
                        ...state,
                        carrito: [...state.carrito, { ...productoAAgregar, cantidad: 1 }]
                    };
                }
            }
            return state;

        case ELIMINAR_CARRITO:
            const producto = state.carrito.find(item => item.id === payload);
            console.log(producto, 'el producto que se elimina');

            // Asegúrate de que `producto` no sea `undefined`
            if (producto) {
                if (producto.cantidad > 1) {
                    return {
                        ...state,
                        carrito: state.carrito.map(item =>
                            item.id === payload
                                ? { ...item, cantidad: item.cantidad - 1 }
                                : item
                        )
                    };
                } else {
                    return {
                        ...state,
                        carrito: state.carrito.filter(item => item.id !== payload)
                    };
                }
            }
            return state;

        case 'INCREMENTAR_CANTIDAD':
            return {
                ...state,
                carrito: state.carrito.map(item =>
                    item.id === action.payload
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            };

        case VACIAR_CARRITO:
            return {
                ...state,
                carrito: []
            };


        default:
            return state
    }
}
