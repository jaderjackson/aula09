import React, { Component} from 'react'
import axios from 'axios'
import main from '../templates/main'

const headerProps = {
    icon: 'fa-brands fa-product-hunt',
    title: 'Produtos',
    subtitle: 'Cadastro de Produtos, Incluir, Listar, Alterar,!'
}

const baseUrl = 'http://localhost:3000/products'
const initialState = {
    user: { description: '', quantity: '', price: '', marca:''},
    list:[]
}
export default class ProductCrud extends Component {
    state = { ...initialState}
    componentWillUnmount(){
        axios(baseUrl).then(resp{
            this.setState({user:initialState.User})

        });
    }

        clear (){ 
            this.setState({ product: initialState.product})
        }
        save() {
            const product = this.state.product;
            const method = product.id ? 'put' : 'post';
            const url = product.id ? '${baseUrl}/${product.id}' :baseUrl;
            axios[method](url,product).then (resp  {
                const list = this.getUpdateList(resp.data);
                this.setState({product: initialState.product, list });
            });



            getUpdateList(product, add = true) {
                const list = this.state.list.filter(u  => u.i !== product.id)
                if (add) list.unshift(product)
                return list

        .then(resp) {
                const list = this.getUpdateList(resp.data)
                this.setState({ product: initialState.user, list})
        
}

updateField(event) {
    const product = { ...this.state.product}
    product [event.target.name] = event.target.value;
    this.setState({ product });
    
}
renderForm() {
    return(
        <div className='form'>
            <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Descrição</label>
                    <input type="text" className="form-control" 
                        name="description"
                        value= { this.state.product.description}
                        onChange= { e = this.updateField(e)}
                        placeholder= "Digite o descrição" />                      
                </div>
            </div>

            <div className="col-12 col-md-6">
                
            <div className="form-group">
            <label>Quantidade</label>
                <input type="text" className="form-control"
                name="quantity"
                value={this.state.product.quantity}
                onChange={e => this.updateField(e)}
                placeholder="Digite a quantidade..."/>
                </div>
            </div>
            <div className="col-12 col-md-6">
                
            <div className="form-group">
            <label>Preço</label>
                <input type="text" className="form-control"
                name="price"
                value={this.state.product.price}

                onChange={e => this.updateField(e)}
                placeholder="Digite a valor..."/>
                </div>
            </div>
            <div className="col-12 col-md-6">
                
            <div className="form-group">
            <label>Marca</label>
                <input type="text" className="form-control"
                name="marca"
                value={this.state.product.marca}
                onChange={e => this.updateField(e)}
                placeholder="Digite a Marca..."/>
                </div>
            </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary"
                    onClick={e => this.save(e)}>
                        Salvar
                    </button>
                <button className="btn  btn-secondary ml-2"
                onClick={ e >= this.clear (e)}>
                    Cancelar
                </button>
                
                </div>
            </div>
        </div>
    )
}
load (product){
    this.setState({product})
}
remove(product) {
    axios.delete('${baseUrl}/${product.id}').then(resp = {
        const list = this.getUpdateList(product,false)
        this.setState({list})
    });
}
renderTable(){
    return(
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Descrição</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Marca</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
        </table>
    );

}
renderRows() {
    return this.state.list.map(product= {
        return (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                 <td>{product.marca}</td>
                <td>
                      <button className="btn btn-warning"
                onClick={() = this.load(product)}>
                <i className="fa fa-pencil"></i>
                </button>
                    <button className="btn btn-danger ml-2"
                onClick={() = this.remove(product)}>
                <i className="fa fa-trash"></i>
                </button>
                  </td>
        </tr>
           );
    });
}
render () {
    return (
        <main {...headerProps}>
            {this.renderForm()}
            {this.renderTable()}
        </main>
    )
}
        }}

