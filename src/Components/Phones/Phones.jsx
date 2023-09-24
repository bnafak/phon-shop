import PhoneCard from "./PhoneCard";



const Phones = ({phones}) => {

    console.log(phones);

    const {products}= phones 

    return (
        <div className="py-10">
            <h1 className="text-2xl text-center text-red-600">All Categories Phones</h1>
            <div className="grid cols-1 md:grid-cols-2 lg:grid-cals-3 gap-5 py-10">
                {
                  !!products && products.map((phone) => <PhoneCard key={phone.id}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;