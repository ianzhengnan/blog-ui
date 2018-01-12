import Layout from '../components/Layout'
import Link from 'next/link'
import Breadcrumb from '../components/Breadcrumb'
import ArchieveYear from '../components/ArchieveYear'
import Catalogs from '../components/Catalogs'

export default () => (
  <Layout title="类别">
    <main className="container" role="main">

      <Breadcrumb />
      <div className="row">
        <div className="col-sm-8 archieves">
          <ArchieveYear year="2017" />
          <ArchieveYear year="2016" />
        </div>
        <aside className="col-sm-3 ml-sm-auto">
          <Catalogs />
        </aside>
      </div>
    </main>
  </Layout>
)
